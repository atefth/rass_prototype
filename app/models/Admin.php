<?php

class Admin extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'admins';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('user_id', 'username');

	public function User()
	{
		$this->belongsTo('User');
	}

}
