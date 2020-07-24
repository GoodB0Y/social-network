import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from 'antd'
import styled from 'styled-components'
import SingleFriend from './SingleFriend'
import SearchIcon from './../../img/icons/search.svg';
import { uniqueId } from 'lodash'

const FriendsWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
    background: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    border-radius: 15px 15px 0px 0px;
    padding: 114px 114px 114px 91px;
    margin-top: 100px;
    position: relative;
`

const PageMarker = styled.h2`
    margin: 0;
    left: 90px;
    top: -91px;
    padding: 58px 77px;
    position: absolute;
    border-radius: 15px;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    background: #FFB11B;
`

const SearchBlock = styled.div`
    display: flex;
    font-size: 16px;
    line-height: 20px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    min-width: 100%;
    border-top: 1px solid #B3B3B3;
    border-bottom: 1px solid #B3B3B3;
    &::after {
        top: 49px;
        right: 0;
        position: absolute;
        height: 30px;
        width: 30px;
        background-color: #515151;
        mask-image: url(${SearchIcon});
        mask-size: cover;
        content: '';
    }
`

const SearchInpit = styled(Input)`
    color: #515151;
    min-width: 100%;
    padding-right: 30px;
    margin: 53px 0px 57px 0px;
    border: none;
    outline:none;
    font-size: 16px;
    line-height: 20px;
    position: relative;
    
`

const friendsArr = [{
    firstname: 'Firstname1',
    lastname: 'Lastname1',
    profesion: 'profeson 1',
    avatarurl: 'https://dummyimage.com/600x400/000/fff'
},
{
    firstname: 'Firstname2',
    lastname: 'Lastname2',
    profesion: 'profeson 2',
    avatarurl: 'https://dummyimage.com/600x400/000/fff'
},
{
    firstname: 'Firstname3',
    lastname: 'Lastname3',
    profesion: 'profeson 3',
    avatarurl: 'https://dummyimage.com/600x400/000/fff'
}
]

const Friends = (props) => {

    const [filterString, setfilterString] = useState('');

    const filterInputHandler = (e) => setfilterString(e.target.value);
    
    const userFiltered = () => {
        if(filterString.length > 0) {
            return friendsArr.filter(({firstname, lastname}) => {
                const fullName = `${firstname} ${lastname}`.toLowerCase();
                // console.log()
                // `${firstname} ${lastname}`.includes(filterString)
                return fullName.includes(filterString)
            })
        }
        return friendsArr;
    }
    
    return (
        <FriendsWrapper>
            <PageMarker>Друзья</PageMarker>
            <SearchBlock>
                <SearchInpit defaultValue='' placeholder='Начните поиск друзей...' onChange={filterInputHandler} nostyle='true' />
            </SearchBlock>
            <div>
                {userFiltered().map((item)=> <SingleFriend
                    key={uniqueId()}
                    firstname={item.firstname}
                    lastname={item.lastname}
                    profesion={item.profesion}
                    avatarurl={item.avatarurl}
                />)}
            </div>
        </FriendsWrapper>
    )
}

export default Friends;