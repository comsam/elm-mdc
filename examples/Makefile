setup:
	npm install -g elm
	npm install -g elm-test
	npm install -g foreman

run: copy_assets
	npm run dev

copy_assets:
	rm -rf ./dist
	mkdir ./dist
	cp -r ./assets ./dist/
	cp -r ../assets ./dist/
