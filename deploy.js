module.exports = async deployer => {
  const contractIsCalled = await deployer.deploy(
    "./src/contract_is_called.djs"
  );
  await deployer.deploy("./src/contract_is_calling.djs", [
    contractIsCalled.address
  ]);
};
