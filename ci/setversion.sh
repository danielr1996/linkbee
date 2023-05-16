perl -i -pe 's/(VERSION=)(\d+)$/$1.($2+1)/e' ci/build.sh 
perl -i -pe 's/(tag: )(\d+)$/$1.($2+1)/e' frontend/chart/values.yaml
perl -i -pe 's/(tag: )(\d+)$/$1.($2+1)/e' backend/chart/values.yaml
