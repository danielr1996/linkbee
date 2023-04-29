# linkbee

## local development
### kind
```shell
tilt up
````

### prod cluster
- set `linkbee-frontend.containerPort` in `Tiltfile`
- swap `portForwards`in `frontend/Tiltfile`
```shell
KUBECONFIG=~/.kube/prod tilt up
```
