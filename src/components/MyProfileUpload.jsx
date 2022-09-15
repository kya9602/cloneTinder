import {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';

const MyProfileUploader = () => {

  const [image, setImage] = useState({
    image_file: "",
    imgUrl: "https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    if(e.target.files[0]){

      URL.revokeObjectURL(image.imgUrl);
      const imgUrl = URL.createObjectURL(e.target.files[0]);
      setImage(() => (
        {
          image_file: e.target.files[0],
          imgUrl: imgUrl
        }
      ))
    }
  }

  // const deleteImage = () => {
    
  //   URL.revokeObjectURL(image.imgUrl);
  //   setImage({
  //     image_file: "",
  //     imgUrl: "img/default_image.png",
  //   });
  // }

  useEffect(()=> {
   
    return () => {
      URL.revokeObjectURL(image.imgUrl)
    }
  }, [])

  const sendImage = async () => {
    if (image.image_file) {
      const formData = new FormData()
      formData.append('file', image.image_file);
      await axios.put('http://13.209.68.188/api/profile/update/img', formData);
      alert("서버에 등록이 완료되었습니다!");
      setImage({
        image_file: "",
        imgUrl: "https://img.hankyung.com/photo/202108/BF.27314751.1.jpg",
      });
    } else {
      alert("사진을 등록하세요!")
    }
  }

  return (
    <UploaderWrapper>
      <input type="file" accept="image/*"
             onChange={saveImage}
             onClick={(e) => e.target.value = null}
             ref={refParam => inputRef = refParam}
             style={{display: "none"}}/>
      <div className="img-wrapper">
        <img src={image.imgUrl}/>
      </div>

      <div>
        <Button type="Upload" variant="contained" onClick={() => inputRef.click()}>
          프로필 사진 바꾸기
        </Button>
      </div>
    </UploaderWrapper>
  );
}

export default MyProfileUploader;

const UploaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-wrapper{
        img{
            width: 250px;
            height: 300px;}`

const Button = styled.button`
    margin: 0 5px;
    margin-top: 10px;
    width: 150px;
    height: 30px;
    font-weight: bold;
    color: white;
    background-color: #fd4f68;
    border: none;
    border-radius: 10px;
    cursor: pointer;

`