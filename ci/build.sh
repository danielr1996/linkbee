VERSION=6
docker buildx build --push --platform=linux/arm64 -t ghcr.io/danielr1996/linkbee-frontend:$VERSION ./frontend/
docker buildx build --push --platform=linux/arm64 -t ghcr.io/danielr1996/linkbee-backend:$VERSION ./backend/
helm dependency update chart
