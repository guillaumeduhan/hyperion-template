# type make gt in your terminal to trigger your commit
# no need to make named commit at this step

# launch apps

client:
	cd apps/client/ && yarn && yarn dev

api:
	cd apps/api/ && npm i && npm run start:dev
	
# github

gt:
	git add .
	git commit -m "commit"
	git push origin 

gtc:
	git pull --no-ff
	make gt

gm:
	git checkout main
	git pull

gmc:
	make gm
	git checkout -

# others

root:
	cd ../..