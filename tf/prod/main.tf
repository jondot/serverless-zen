provider "aws" {
  region = "us-east-1"
}

module "shared" {
  source  = "../modules/shared"
  table   = "Things"
  env     = "prod"
  service = "my-service"
}
