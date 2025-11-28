const Notification = () => {
  return (
    <p className="bg-secondary text-white text-xs md:text-sm text-nowrap py-2 px-6 text-center 
    flex justify-center items-center gap-2">
      <span className="truncate w-[80%] [@media(min-width:378px)]:w-auto">LIMITED OFFER: 30% OFF. Use RABBIT30 at Checkout.</span> <span>23 : 15: 00</span>
    </p>
  );
};

export default Notification;
