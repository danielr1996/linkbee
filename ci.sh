VERSION=2
docker buildx build --push --platform=linux/arm64,linux/amd64 -t ghcr.io/danielr1996/linkbee-frontend:"$VERSION" ./frontend/
# docker push ghcr.io/danielr1996/linkbee-frontend:$VERSION
docker buildx build --push --platform=linux/arm64,linux/amd64 -t ghcr.io/danielr1996/linkbee-backend:$VERSION ./backend/
# docker push ghcr.io/danielr1996/linkbee-backend:$VERSION
