.PHONY: run deploy

run:
	meteor --settings settings.development.json

deploy:
	modulus env set METEOR_SETTINGS "$$(cat settings.json)"
	modulus deploy
