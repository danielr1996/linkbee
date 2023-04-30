version_settings(constraint='>=0.22.2')

load('ext://namespace', 'namespace_create')

namespace_create('linkbee')
k8s_yaml(helm('./chart',
    namespace='linkbee',
    values=['./values.tilt.yaml'],
    # set=['linkbee-frontend.containerPort=3000']
))
load_dynamic('./backend/Tiltfile')
load_dynamic('./frontend/Tiltfile')
local_resource('helm dependency update', 
    cmd='helm dependency update', 
    deps=[
        'frontend/chart',
        'backend/chart'
        ],
    auto_init=False, 
    dir='chart'
)
