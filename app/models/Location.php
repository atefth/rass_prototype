<?php

class Location extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'locations';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('lat', 'long');

	public function Site()
	{
		$this->hasMany('Site');
	}

	public function Swipers()
	{
		$this->hasMany('Swiper');
	}

}
