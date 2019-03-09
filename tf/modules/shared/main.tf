resource "aws_s3_bucket" "b" {
  bucket = "${var.service}-bucket-${var.env}"
  acl    = "private"
}

resource "aws_dynamodb_table" "t" {
  name           = "${var.table}-${var.env}"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "id"

  attribute {
    name = "id"
    type = "S"
  }
}
