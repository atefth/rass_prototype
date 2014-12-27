<?php

class AdminController extends BaseController {

	public function index()
	{
		$admins = Admin::all();
		$json = array();
		foreach ($admins as $key => $admin) {
			$user = User::find($admin->user_id);
			$entry = array('id' => $admin->id,'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'username' => $admin->username);
			array_push($json, $entry);
		}
		return json_encode($json);
	}

	public function store()
	{
		$input = Input::all();
		$userData = array('first_name' => $input['first_name'], 'last_name' => $input['last_name'], 'email' => $input['email'], 'password' => Hash::make($input['password']));
		$user = User::create($userData);
		if ($user) {
			$adminData = array('username' => $input['username'], 'user_id' => $user->id);
			$admin = Admin::create($adminData);
			if ($admin) {
				return 'success';
			}else{
				return 'failure';
			}
		}else{
			return 'error';
		}
	}

	public function show($id)
	{
		$admin = Admin::find($id);
		$user = User::find($admin->user_id);
		$entry = array('id' => $admin->id,'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'username' => $admin->username);
		return json_encode($entry);
	}

	public function update($id)
	{
		$input = Input::all();
		$admin = Admin::find($id);
		$user = User::find($admin->user_id);
		$admin->username = $input['username'];
		$user->first_name = $input['first_name'];
		$user->last_name = $input['last_name'];
		$user->email = $input['email'];
		$user->password = Hash::make($input['password']);
		$admin->save();
		$user->save();
		return 'success';
	}

	public function destroy($id)
	{
		$admin = Admin::find($id);
		$user = User::find($admin->user_id);
		$admin->delete();
		$user->delete();
		return 'success';
	}

}
