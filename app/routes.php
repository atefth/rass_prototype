<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@index');

Route::group(array('prefix' => 'api', 'after' => 'allowOrigin'), function()
{
	Route::resource('admins', 'AdminController');
	Route::resource('swipers', 'SwiperController');
	Route::resource('sites', 'SiteController');
	Route::resource('zones', 'ZoneController');
});