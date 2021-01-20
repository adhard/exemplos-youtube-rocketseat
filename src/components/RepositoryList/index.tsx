import React, { Component } from 'react';

import { Repository } from '../../store/ducks/repositories/types'
import { ApplicationState } from '../../store'
import { connect } from 'react-redux'

import { bindActionCreators, Dispatch } from 'redux'
import * as RepositoriesActions from '../../store/ducks/repositories/actions'

// mapeia-se informações que virao no mapstatetoprops
interface StateProps {
    repositories: Repository[]
}

// mapeia-se as funcoes que virao atraves do dispatch do redux
interface DispatchProps {
    loadRequest(): void
}

// qualquer outra informação que venha de um componente pai
// interface OwnProps {

// }

// type Props = StateProps & DispatchProps & OwnProps
type Props = StateProps & DispatchProps

class RepositoryList extends Component<Props> {   

    componentDidMount(){
        const { loadRequest } = this.props

        loadRequest()
    }

    render(){
        const { repositories } = this.props
        return (
            <ul>
                {
                    repositories.map(repository => <li>{repository.name}</li>)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
})

const mapDispatchToProps = (dispatch: Dispatch) => 
    bindActionCreators(RepositoriesActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)