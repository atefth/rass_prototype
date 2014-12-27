<?php

class HomeController extends BaseController {

	public function index()
	{
		Session::put('base_path', URL::to('/'));
		return File::get(public_path().'/index.html');
	}

}