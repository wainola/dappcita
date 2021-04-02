install:
	@echo "[install] installing app"
	@npm install -g truffle
	@cd client && npm install

blockchain:
	@echo "[blockchain] running ethereum test network"
	@truffle migrate 
	@truffle compile
	@truffle develop

dev:
	@echo "[run] running app"
	@cd client && npm start