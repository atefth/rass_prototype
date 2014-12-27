<?php

class SwiperController extends BaseController {

	public function index()
	{
		$swipers = Swiper::all();
		$json = array();
		foreach ($swipers as $key => $swiper) {
			$user = User::find($swiper->user_id);
			$entry = array('id' => $swiper->id,'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'rfid' => $swiper->rfid);
			array_push($json, $entry);
		}
		return json_encode($json);
	}

	public function store()
	{
		$input = Input::all();
		$userData = array('first_name' => $input['first_name'], 'last_name' => $input['last_name'], 'email' => $input['email'], 'password' => Hash::make("password"));
		$user = User::create($userData);
		if ($user) {
			$swiperData = array('rfid' => $input['rfid'], 'user_id' => $user->id);
			$swiper = Swiper::create($swiperData);
			if ($swiper) {
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
		$swiper = Swiper::find($id);
		$user = User::find($swiper->user_id);
		$entry = array('id' => $swiper->id,'first_name' => $user->first_name, 'last_name' => $user->last_name, 'email' => $user->email, 'rfid' => $swiper->rfid);
		return json_encode($entry);
	}

	public function update($id)
	{
		$input = Input::all();
		$swiper = Swiper::find($id);
		$user = User::find($swiper->user_id);
		$swiper->rfid = $input['rfid'];
		$user->first_name = $input['first_name'];
		$user->last_name = $input['last_name'];
		$user->email = $input['email'];
		// $user->password = Hash::make();
		$swiper->save();
		$user->save();
		return 'success';
	}

	public function destroy($id)
	{
		$swiper = Swiper::find($id);
		$user = User::find($swiper->user_id);
		$swiper->delete();
		$user->delete();
		return 'success';
	}

}
