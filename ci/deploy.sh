KUBECONFIG=~/.kube/dke-dev helm upgrade --install --create-namespace --namespace linkbee linkbee ./chart -f values.dke.yaml
