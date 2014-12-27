<?php

class Swiper extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'swipers';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('user_id', 'rfid');

	public function User()
	{
		$this->belongsTo('User');
	}

	public function Location()
	{
		$this->belongsTo('Location');
	}

	public function Sites()
	{
		$this->belongsToMany('Site', 'site_swiper');
	}

}
