setup:
	npm install -g elm
	npm install -g elm-test
	npm install -g foreman

run: copy_assets
	cd examples && npm run dev

copy_assets:
	rm -rf ./examples/dist
	mkdir ./examples/dist
	cp -r ./assets ./examples/dist/
	cp -r ./examples/assets ./examples/dist/
