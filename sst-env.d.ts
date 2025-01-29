/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "Auth": {
      "type": "sst.aws.Auth"
      "url": string
    }
    "Bus": {
      "arn": string
      "name": string
      "type": "sst.aws.Bus"
    }
    "Vpc": {
      "type": "sst.aws.Vpc"
    }
    "Web": {
      "type": "sst.aws.StaticSite"
      "url": string
    }
    "ZeroDatabase": {
      "database": string
      "host": string
      "password": string
      "port": number
      "type": "sst.aws.Postgres"
      "username": string
    }
    "ZeroService": {
      "service": string
      "type": "sst.aws.Service"
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}