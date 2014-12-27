<?php

class ZoneController extends BaseController {

	public function index()
	{
		return Zone::all()->toJson();
	}

	public function store()
	{
		$input = Input::all();
		$zoneData = array('name' => $input['name']);
		$zone = Zone::create($zoneData);
		if ($zone) {
			return 'success';
		}else{
			return 'error';
		}
	}

	public function show($id)
	{
		return Zone::find($id);
	}

	public function update($id)
	{
		$input = Input::all();
		$zone = Zone::find($id);
		$zone->name = $input['name'];
		$zone->save();
		return 'success';
	}

	public function destroy($id)
	{
		$zone = Zone::find($id);
		$zone->delete();
		return 'success';
	}

}
