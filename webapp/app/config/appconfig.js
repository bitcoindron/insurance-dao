(function () {
    mainModule = angular.module('InsuranceStore');

    mainModule.$inject = ['$stateProvider', '$urlRouterProvider'];
    mainModule.config(appConfig);

    mainModule.constant('InsuranceCompanyContract', {
        abi: [
                {
                "constant": false,
                "inputs": [
                    {
                    "name": "expert",
                    "type": "address"
                    }
                ],
                "name": "addExpert",
                "outputs": [],
                "payable": true,
                "type": "function"
                },
                {
                "constant": false,
                "inputs": [
                    {
                    "name": "driverAddress",
                    "type": "address"
                    }
                ],
                "name": "IssueContract",
                "outputs": [
                    {
                    "name": "",
                    "type": "address"
                    }
                ],
                "payable": true,
                "type": "function"
                },
                {
                "constant": true,
                "inputs": [
                    {
                    "name": "",
                    "type": "address"
                    }
                ],
                "name": "IsExpert",
                "outputs": [
                    {
                    "name": "",
                    "type": "bool"
                    }
                ],
                "payable": false,
                "type": "function"
                },
                {
                "inputs": [],
                "payable": false,
                "type": "constructor"
                },
                {
                "anonymous": false,
                "inputs": [
                    {
                    "indexed": false,
                    "name": "driverAddress",
                    "type": "address"
                    }
                ],
                "name": "Issued",
                "type": "event"
                }
            ],
        unlinked_binary: "0x6060604052341561000c57fe5b5b60018054600160a060020a03191633600160a060020a03161790555b5b6103e4806100396000396000f300606060405263ffffffff60e060020a6000350416634fcaee7781146100375780638db132831461004d578063b80301d11461007d575bfe5b61004b600160a060020a03600435166100ad565b005b610061600160a060020a03600435166100f1565b60408051600160a060020a039092168252519081900360200190f35b341561008557fe5b610099600160a060020a036004351661019a565b604080519115158252519081900360200190f35b60015433600160a060020a039081169116146100c95760006000fd5b600160a060020a0381166000908152602081905260409020805460ff191660011790555b5b50565b60006000826100fe6101af565b600160a060020a03909116815260405190819003602001906000f080151561012257fe5b604051909150600160a060020a03821690600a340280156108fc02916000818181858888f19350505050151561015457fe5b60408051600160a060020a038516815290517fa566fc6a716182a1dc2bc8d30c98b4278f1d386554dcbbd6a0c39aaedad08c289181900360200190a18091505b50919050565b60006020819052908152604090205460ff1681565b6040516101f9806101c08339019056006060604052341561000c57fe5b6040516020806101f983398101604052515b4260025560008054600160a060020a03808416600160a060020a0319928316179092556001805433909316929091169190911790555b505b610194806100656000396000f300606060405263ffffffff60e060020a60003504166322427047811461002c57806371eb783814610041575bfe5b341561003457fe5b61003f600435610053565b005b341561004957fe5b61003f61011c565b005b6301e13380600254420311156100695760006000fd5b6001546040805160006020918201819052825160e060020a63b80301d1028152600160a060020a03338116600483015293519194939093169263b80301d192602480830193919282900301818787803b15156100c157fe5b6102c65a03f115156100cf57fe5b5050604051519150508015156100e55760006000fd5b60008054604051600160a060020a039091169184156108fc02918591818181858888f19350505050151561011557fe5b5b5b505b50565b6301e13380600254420310156101325760006000fd5b600154604051600160a060020a039182169130163180156108fc02916000818181858888f19350505050151561016457fe5b5b5b5600a165627a7a723058206fb5f6e6f1a3fbd64356fdc7ed9b31af6385ed635fbc1a46c2881e408fb34b640029a165627a7a72305820502c5bee50bd330b54f1fd6f80aed42177fc5c70177b11c8ed096edd0c73dfda0029"
    });

    function appConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index.html");

        var states =
            [{
                name: 'AddOrg',
                url: '/orgs/Add',
                component: 'addOrgComponent'
            },
            {
                name: 'AddExpert',
                url: '/orgs/{expertAddress}',
                component: 'addOrgComponent'
            }];
        _.each(states, function (state) {
            $stateProvider.state(state);
        });
    }
} ());