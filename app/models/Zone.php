<?php

class Zone extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'zones';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('name');

	public function Swiper()
	{
		$this->belongsToMany('Swiper', 'zone_swiper');
	}

	public function Sites()
	{
		$this->hasMany('Site');
	}

}
