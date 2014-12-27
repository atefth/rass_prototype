<?php

class SiteController extends BaseController {

	public function index()
	{
		return Site::all()->toJson();
	}

	public function store()
	{
		$input = Input::all();
		$siteData = array('name' => $input['name']);
		$site = Site::create($siteData);
		if ($site) {
			return 'success';
		}else{
			return 'error';
		}
	}

	public function show($id)
	{
		return Site::find($id);
	}

	public function update($id)
	{
		$input = Input::all();
		$site = Site::find($id);
		$site->name = $input['name'];
		$site->save();
		return 'success';
	}

	public function destroy($id)
	{
		$site = Site::find($id);
		$site->delete();
		return 'success';
	}

}
