import React, {useEffect} from "react";

const TestButton = () => {
  const platform = navigator.platform.toLowerCase();

  useEffect(() => {
    console.log(platform)
  }, [platform]);

  return(
    <a className="my-button">
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17 11.707C17 15.0207 14.3137 17.707 11 17.707C7.68629 17.707 5 15.0207 5 11.707C5 8.39332 7.68629 5.70703 11 5.70703C14.3137 5.70703 17 8.39332 17 11.707ZM16.1814 17.8026C14.7855 18.9903 12.9764 19.707 11 19.707C6.58172 19.707 3 16.1253 3 11.707C3 7.28875 6.58172 3.70703 11 3.70703C15.4183 3.70703 19 7.28875 19 11.707C19 13.4274 18.4569 15.021 17.5329 16.3257L21.7071 20.4999L20.2929 21.9141L16.1814 17.8026Z" fill="#181818"/>
      </svg>
      <span
        style={{
          height: '15px',
          marginTop: (platform.includes('mac') || platform.includes('darwin')) ? '5px' : '5px',
          marginBottom: '5px',
          display: 'flex',
          alignItems: (platform.includes('mac') || platform.includes('darwin')) ? 'flex-start' : 'center',
        }}
      >
        search
      </span>
    </a>
  )
}

export default TestButton
