
import React,{ Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types'

export  class RowLayout extends Component{
    
            _renderSize = ( children )=>{
                return(
                    <View
                    style={{
                        width: this.props.width,
                        height: this.props.height
                    }}
                    >
                        { children }
                    </View>
                )
            }
    
            _renderLayout = ()=>{
                return (
                    <View
                    style = {{
                        flex: 1,
                        height: this.props.height && !this.props.width ? this.props.height : null,
                        flexDirection: 'row',
                        flexWrap: this.props.wrap ? 'wrap' :null,
                        justifyContent: this.props.rowCenter? 'center' : null,
                        alignItems: this.props.colCenter? 'center' : null,
                        backgroundColor: this.props.backgroundColor || 'transparent'
                    }}
                    >
                        {this.props.children}
                    </View>
                )
            }
        render(){
    
            return (
                this.props.width?
                (
                    this._renderSize( this._renderLayout() )
                ):
                (
                    this._renderLayout()
                )
            )
        }
    }
  export  class ColLayout extends Component{
            _renderSize = (children) =>{
    
                return (
                    <View
                    style={{
                        width: this.props.width ,
                        height: this.props.height
                    }}
                    >
                        { children }
                    </View>
                )
            }
    
            _renderLayout = ()=>{
                return (
                    <View
                    style = {{
                        flex: 1,
                        width: this.props.width && !this.props.height ? this.props.width : null,
                        flexWrap: this.props.wrap ? 'wrap' : null,
                        justifyContent: this.props.colCenter ? 'center' : null,
                        alignItems: this.props.rowCenter ? 'center' : null,
                        backgroundColor: this.props.backgroundColor
                    }}
                    >
                        {this.props.children}
                    </View>
                )
            }
            render(){
        
                return (
                    this.props.height?
                    (
                        this._renderSize( this._renderLayout() )
                    ):
                    (
                        this._renderLayout()
                    )
                    
                )
            }
        }
    
        

        ColLayout.propTypes = RowLayout.propTypes = {
            width: PropTypes.number,
            height: PropTypes.number,
            warp: PropTypes.bool,
            colCenter: PropTypes.string,
            rowCenter: PropTypes.string,
            backgroundColor: PropTypes.string
        }