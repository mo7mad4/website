import styled from "styled-components";

const Styles = styled.div`

.item {
    display: flex;
    padding: 0 2rem;
  }
  
  .itemImage {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  
  .itemImage img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 5px;
    margin-top: 100px;
  }
  
  .item-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 5rem;
    position: relative;
  }
  
  @media screen and (max-width: 1050px) {
    .item{
      flex-direction: column;
    }
    .item-content{
      margin: 0 0 3rem;
    }
    .item-image{
      border-right: unset;
    }
    .item-content-detail p{
      width: 100%;
    }
   
  }
  
  @media screen and (max-width: 650px) {
    .item-content h1{
      font-size: 28px;
    line-height: 42px;
    }
    .item-content p{
      font-size: 16px;
      line-height: 24px;
    }
    .item-content__people{
      flex-direction: column;
    }
    .item-content__people p{
      margin: 0;
    }

  
  }
  @media screen and (max-width: 490px){
    .item-content h1{
      font-size: 28px;
    line-height: 42px;
    }
    .item-content p{
      font-size: 14px;
      line-height: 26px;
    }
    .item{
      padding-inline:1rem !important ;
      padding-top: 1rem !important;
    }
    .item-image img{
      padding: 0;
      border-radius: 20px;
      margin-bottom: 25px;
    }
    .item-content-action{
      top: 15%;
    }
    .item-content-action p{
      margin-inline: 5px;
      
    }
   
  }

`

export default Styles;

