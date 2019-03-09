provider "aws" {
  region                      = "us-east-1"
  skip_credentials_validation = true
  skip_requesting_account_id  = true
  skip_metadata_api_check     = true
  s3_force_path_style         = true
  access_key                  = "minio-access"
  secret_key                  = "minio-secret"

  endpoints {
    dynamodb = "http://localhost:8000"
    s3       = "http://localhost:4577"
  }
}

module "shared" {
  source  = "../modules/shared"
  table   = "Things"
  env     = "dev"
  service = "my-service"
}
