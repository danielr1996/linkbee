CHART_VERSION=$(grep '^version:' ./chart/Chart.yaml | tail -n1 | awk '{ print $2}')
helm package chart
helm push linkbee-${CHART_VERSION}.tgz oci://ghcr.io/danielr1996
rm -rf linkbee-${CHART_VERSION}.tgz