import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // states
        selectedClass: [],
        divData: [],
        showNavBar: false,
        dynamicIndex: 0,
        dynamicType: 1,
        dynamicId: '',
        editorTempData: '<p>Content of the editor.</p>',
        imageSize:'',
        imagePath: '',
        mediaType: '',
        innerDyanamicIndex: '',
        enterImageData: '',
        enterVideoData: '',
        isEdit: false,
        showText: true,
        showVideo: true,
        showImage: true,
        textArea: false,
        videoArea: false,
        imageArea: false,
        btnClicked: true,
        isFromBody: false,
        isFromEyePicker: false,
        rowParentClass: '',
        forChild: false,
        forTest:false,
        isFromInnerEyePicker: false,
        showIcon: true,
        editorTempImageData: '',
        editorTempVideoData: '',
        imageBackgroundPath: '',
        parentDivData:[],
        storedValue: '',
    },
    getters: {
        // getters
    },
    mutations: {
        // Dynamic state changes
        CHANGE_STATE (state, value) {
            // console.log(this.state.imageBackgroundPath , 'my data')
            state[value[0]] = value[1] 
            // console.log(value[1], 'store')
        },
        SET_PARENT_DIV_DATA (state){
            var parentArray = [];
            parentArray= 
                {
                    className:'col-sm-12',
                    divData:state.divData
                }
            // if(state.dynamicIndex){
            //     state.divData.push()
            // }
            
            state.parentDivData.push(parentArray)
        },
        SET_DIV_DATA (state, value) {
            // Push data to the divData state
            var dynamicId1 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId2 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId3 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId4 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var dynamicId5 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            var tempArray = []
            var tempArray2= []
            tempArray2 =[
                {
                    className:'col-sm-12'
                }
            ]
            if (value == 'FullWidthComponent') {
                tempArray = [
                    {
                        name:value,
                        type: 'one',
                        className:'col-sm-12',
                       
                        style:{},
                        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                        values: [{
                                text: '',
                                style:{},
                            },
                            {
                                image: '',
                                style:{},
                            },
                            {
                                video: '',
                                style:{},
                            }
                        ]  
                    }
                ]
            }
            else if (value == 'TwoWidthComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'two',
                    className: 'col-sm-6',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                        text: '',
                        boolean1: false,
                        style:{},
                        
                    },
                    {
                        image: '',
                        boolean2: false,
                        style:{},
                    },
                    {
                        video: '',
                        boolean3: false,
                        style:{},
                    }
                ]
                },
                {
                    name: value,
                    type: 'three',
                    className: 'col-sm-6',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            boolean1: false,
                            style:{},
                        },
                        {
                            image: '',
                            boolean2: false,
                            style:{},
                        },
                        {
                            video: '',
                            boolean3: false,
                            style:{},
                        }
                    ]
                },  
            ]
            }
            else if (value == 'FourColumnComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'eleven',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            boolean: false,
                            style:{},
                           
                        },
                        {
                            image: '',
                            boolean: false,
                            style:{},
                        },
                        {
                            video: '',
                            boolean: false,
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twelve',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'thirteen',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'fourteen',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },      
            ]
            }
            else if (value == 'TwoByTenComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'nineteen',
                    className: 'col-sm-2',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twenty',
                    className: 'col-sm-10',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },  
            ]
            }
            else if (value == 'ThreeWidthComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'four',
                    className: 'col-sm-4',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'five',
                    className: 'col-sm-4',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text:'',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'six',
                    className: 'col-sm-4',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },    
            ]
            }
            else if (value == 'FourByEightComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'seven',
                    className: 'col-sm-4',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'eight',
                    className: 'col-sm-8',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'EightByfourComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'nine',
                    className: 'col-sm-8',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'ten',
                    className: 'col-sm-4',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'ThreeByNineComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'fifteen',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name:value,
                    type: 'sixteen',
                    className: 'col-sm-9',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'NineByThreeComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'seventeen',
                    className: 'col-sm-9',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'eighteeen',
                    className: 'col-sm-3',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                    
            ]
            }
            else if (value == 'TenBytwoComponent') {
                
                tempArray = [ {
                    name: value,
                    type: 'twentyone',
                    className: 'col-sm-10',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
                {
                    name: value,
                    type: 'twentytwo',
                    className: 'col-sm-2',
                    style:{},
                    id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    values: [{
                            text: '',
                            style:{},
                        },
                        {
                            image: '',
                            style:{},
                        },
                        {
                            video: '',
                            style:{},
                        }
                    ]
                },
            ]
            }
        
            if (state.forChild) {
              
                // Is from insert a row just after the selected row area
                var index = state.dynamicIndex
                state.divData.splice((index + 1), 0, {name: value, divs: tempArray, two: '', three: '', four: '', five: '', six: '', seven: '', eight: '', nine: '', ten: '', eleven:'', twelve: '', thirteen:'', fourteen:'', fifteen:'', sixteen:'',seventeen:'', eighteeen:'', nineteen:'',twenty:'', twentyone:'', twentytwo:'', style: '', id1: dynamicId1, id2: dynamicId2, id3: dynamicId3, id4: dynamicId4, bgId: dynamicId5});
                
            }
            else {
                // Insert a row bottom of ther array
                state.divData.push({name: value, divs: tempArray, two: '', three: '', four: '', five: '', six: '', seven: '', eight: '', nine: '', ten: '', eleven:'', twelve: '', thirteen:'', fourteen:'', fifteen:'', sixteen:'',seventeen:'', eighteeen:'', nineteen:'',twenty:'', twentyone:'', twentytwo:'', style: '', id1: dynamicId1, id2: dynamicId2, id3: dynamicId3, id4: dynamicId4, bgId: dynamicId5})
              
            }
            state.forChild = false
            state.forTest = false
        },
        SET_DIV_VALUE (state, value) {
            var dynamicMediaType = ''
            if (state.mediaType == 0) {
                dynamicMediaType = 'text'
            } else if (state.mediaType == 1) {
                dynamicMediaType = 'image'
            } else {
                dynamicMediaType = 'video'
            }
            // Set divs data value
            state.divData[state.dynamicIndex].divs[state.innerDyanamicIndex].values[state.mediaType][dynamicMediaType] = value

            // For testing purpose ---- 15-07-2019
            // state.divData.map((temp, index) => {
            //     if (index === state.dynamicIndex) {
            //         console.log(index, 'index')
            //         temp.divs.map((divTemp, key) => {
            //             if (key === state.innerDyanamicIndex) {
            //                 console.log(key, divTemp, 'key')
            //                 divTemp.values.map((tempValue, tempIndex) => {
            //                     if (tempIndex === state.mediaType) {
            //                         console.log(tempValue.text, tempIndex, 'innersdff')
            //                         tempValue.text = value
            //                     }
            //                 })
            //             }
            //             console.log(divTemp, 'temp')
            //         })   
            //     }
            // })
            
        },
        REMOVE_ITEM_FROM_DIV_DATA (state, value) {
            // Remove item from divData array
            alert('sdgshdsdgdsgd')
            state.divData.splice(state.divData.indexOf(value), 1);
        },
        REMOVE_ITEM_AT_DIV_DATA (state, value) {
            // Remove Item at divData array
            console.log(value, 'REMOVE_ITEM_AT_DIV_DATA')
            state.divData.splice(value, 1);
        },
        MOVE_ITEM_DIV_DATA (state, value) {
            // Drag and drop move Items
            var from = value[0]
            var to = value[1]
            state.divData.splice(to, 0, state.divData.splice(from, 1)[0]);
        },
        MOVE_ITEM_DIV_DATA_INNER (state, value) {
            // Drag and drop move Items

           console.log(value,'dsajhjdahd') 
           
           alert(state.dynamicIndex)
            var from = value[0]
            var to = value[1]
           var test = state.divData[state.dynamicIndex].divs.splice(to, 0, state.divData[state.dynamicIndex].divs.splice(from, 1)[0]);
           console.log(test )
        },
        REMOVE_VALUE_FROM_DIV_DATA (state, value) {
            // Remove value from divData array
            state.divData[state.dynamicIndex][state.dynamicType] = ''
        },
        SET_CSS_TO_DIV_DATA (state, value) {
            // Set css to divData array style obj
            var tempStyle = state.divData[state.dynamicIndex]['style']
            state.divData[state.dynamicIndex]['style'] = tempStyle + ' ; ' + value[0] + ': ' + value[1]
        },
        // Developed by Kandarp Pandya - 18-07-2019
        SET_CSS_TO_DIV_DATA_INNER (state, value) {
            // Set divs data value
            console.log(state.dynamicIndex, state.innerDyanamicIndex, state.mediaType, 'SET_CSS_TO_DIV_DATA_INNER')
            state.divData[state.dynamicIndex].divs[state.innerDyanamicIndex].values[state.mediaType]['style'] = value[0] + ': ' + value[1]
        },
        // end
        COPY_DIV_DATA (state, value) {
            // Copy div
            state.divData[state.dynamicIndex]['divs'].push({
                className:value[0],
                type:value[1],
                style:{},
                id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                values: [{
                        text:'',
                        style:{},
                    },
                    {
                        image:'',
                        style:{},
                    },
                    {
                        video:'',
                        style:{},
                    }
                ]
            })
        },
        EMPTY_DIVS_VALUE (state, value) {
            // Delete content from perticuler div
            // console.log(state.divData[state.dynamicIndex].divs[value].values[0].length)
            var mediaType = 0
            if (state.divData[state.dynamicIndex].divs[value].values[0].text != '' && state.divData[state.dynamicIndex].divs[value].values[0].text != '<p></p>') {
                mediaType = 0
            } else if (state.divData[state.dynamicIndex].divs[value].values[1].image != '') {
                mediaType = 1
            } else if (state.divData[state.dynamicIndex].divs[value].values[2].video != '') {
                mediaType = 2
            }
            var dynamicMediaType = ''
            if (mediaType == 0) {
                dynamicMediaType = 'text'
            } else if (mediaType == 1) {
                dynamicMediaType = 'image'
            } else {
                dynamicMediaType = 'video'
            }

            // console.log(state.dynamicIndex, value, mediaType, dynamicMediaType)
            state.divData[state.dynamicIndex].divs[value].values[mediaType][dynamicMediaType] = ''
            state.divData[state.dynamicIndex].divs[value].style = {}
        },
        COPY_DIV_WITH_IINER (state, value) {
            // Copy div with inner Data
            // value[1] = mainIndex
            // value[0] = innerIndex
            var data = _.cloneDeep(state.divData[value[1]]['divs'][value[0]]);
            state.divData[value[1]]['divs'].push({
                className: data.className,
                type: data.type,
                style: data.style,
                id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                values: data.values
            })
        },
        COPY_FULL_ROW_WITH_INNER(state, value){
            // Clone div with inner data
            
            var index = state.dynamicIndex
            console.log(state.divData[value], 'value')
            var copy = _.cloneDeep(state.divData[value]);
            state.divData.splice((index + 1), 0, copy)
        },
        SET_INNER_IMAGE_COLOR (state, value) {
            // Set Inner Background
            state.divData[state.dynamicIndex].divs[state.innerDyanamicIndex].style = value.join(' : ');
        },
    },
    actions: {
        // Actions
        ACTION_CHANGE_STATE (context, value) {
            context.commit('CHANGE_STATE', value)
        },
        ACTION_PUSH_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_DATA', value)
        },
        ACTION_PUSH_PARENT_DIV_DATA (context , value){
              context.commit('SET_PARENT_DIV_DATA')
        },
        ACTION_ADD_VALUE_TO_DIV_DATA (context, value) {
            context.commit('SET_DIV_VALUE', value)
        },
        ACTION_REMOVE_VALUE_FROM_DIV_DATA (context, value) {
            context.commit('REMOVE_VALUE_FROM_DIV_DATA', value)
        },
        ACTION_SET_CSS (context, value) {
            context.commit('SET_CSS_TO_DIV_DATA', value)
        },
        ACTION_COPY_DIV_DATA (context, value) {
            context.commit('COPY_DIV_DATA', value)
        },
        ACTION_EMPTY_DIVS_VALUE(context, value) {
            context.commit('EMPTY_DIVS_VALUE', value)
        },
        ACTION_COPY_DIV_WITH_INNER_DATA (context, value) {
            context.commit('COPY_DIV_WITH_IINER', value)
        },
        ACTION_COPY_FULL_ROW_DIV_WITH_INNER_DATA(context, value){
            context.commit('COPY_FULL_ROW_WITH_INNER', value)
        },
        
    },
    modules: {
        
    }

})