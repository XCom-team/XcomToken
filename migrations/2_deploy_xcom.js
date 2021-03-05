const XcomToken = artifacts.require("XcomToken");

module.exports = function(deployer) {
  // Xcom 最大发行量 4亿
  deployer.deploy(XcomToken, "Xcom", "XC", "400000000000000000000000000");
};
