<?php 

namespace App\Http\Controllers\API\V1\Jobseeker;

use App\User;
use App\Http\Controllers\API\V1\BaseApiController;

class JobseekerController extends BaseApiController {

	public function index() {
		$data = [
			['id' => 1, 'name' => 'John'],
			['id' => 2, 'name' => 'Rick']
		];
		return $this->createResponse($data);
	}

	public function create() {
		$data = [
			'id' => '--newly generated Id--',
			'name' => 'Johnny'
		];

		return $this->createResponse($data, 201);
	}

	public function testError() {
		try {
			$i = 2/0;
		}
		catch (\Exception $e) {
			return $this->createErrorResponse($e->getMessage(), 500);
		}
	}

	public function find($id) {
		$user = User::find($id);
		if (!$user)
			return $this->createErrorResponse("User not found", 404);
		return $this->createResponse($user);
	}

	public function delete($id) {
		// --delete code here
		// 
		// 
		return $this->createResponse(null, 204);
	}

}