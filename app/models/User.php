<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;

class User extends Eloquent implements UserInterface {

	use UserTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('first_name', 'last_name', 'email', 'password');

	public function Admins()
	{
		$this->hasMany('Admin');
	}

	public function Swipers()
	{
		$this->hasMany('Swiper');
	}

}
