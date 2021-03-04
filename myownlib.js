function istouch(mRect,fRect) {
    if(mRect.x - fRect.x < mRect.width/2 + fRect.width/2 &&
      fRect.x - mRect.x < mRect.width/2 + fRect.width/2 &&
      fRect.y - mRect.y < mRect.height/2 + fRect.height/2 &&
       mRect.y - fRect.y < mRect.height/2 + fRect.height/2)
      {
        return true;
    }
    else
    {
      return false;
    }
  }
  