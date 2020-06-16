<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
	'namespace' => 'Jobseeker',
	'prefix' => 'jobseekers'
], function() {
   
	Route::get('/', 'JobseekerController@index');
	Route::post('/', 'JobseekerController@create');
	Route::get('/error', 'JobseekerController@testError');
	Route::get('/{id}', 'JobseekerController@find');
	Route::delete('/{id}', 'JobseekerController@delete');
});