## Steps:

1. Run the container: `docker-compose up`
2. Apply the schema `docker exec directus_example npx directus schema apply schema.yaml --yes`
3. Call `http://0.0.0.0:8055/course` to reproduce the issue


