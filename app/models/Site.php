<?php

class Site extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'sites';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $fillable = array('name', 'ip', 'location_id', 'zone_id');

	public function Swipers()
	{
		$this->belongsToMany('Swiper', 'site_swiper');
	}

	public function Location()
	{
		$this->belongsTo('Location');
	}

	public function Zone()
	{
		$this->belongsTo('Zone');
	}

}
