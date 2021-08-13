install:
	./setup.sh

start:
	./start.sh

container:
	docker exec -ti nodejs_design_pattern zsh

run:
	docker exec -ti nodejs_design_pattern yarn start