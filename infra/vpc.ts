export const vpc = new sst.aws.Vpc("Vpc", {
  bastion: true,
  nat: "ec2",
});
