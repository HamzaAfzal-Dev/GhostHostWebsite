const right_nav_item = document.querySelectorAll(".right_navigation div");



for (let index = 0; index < right_nav_item.length; index++) 
{
    const element = right_nav_item[index];
    const body = document.querySelector("body");
    let navigation_info;
    let position_element;

    element.addEventListener("mouseenter", 
    () => 
    {
        navigation_info = document.createElement("p");
        navigation_info.classList.add("navigation_info");
        position_element = element.getBoundingClientRect();
        

        navigation_info.style.position = 'absolute';
        navigation_info.style.top = position_element.top + 'px';
        navigation_info.style.right = '9vw';

        switch (index) {
            case 0:
                navigation_info.innerHTML = "About Us";
                break;
            case 1:
                navigation_info.innerHTML = "Our Technology";
                break;
            case 2:
                navigation_info.innerHTML = "Pricing";
                break;
            case 3:
                navigation_info.innerHTML = "Buy Back";
                break;
            case 4:
                navigation_info.innerHTML = "Roadmap";
                break;
            default:
                break;
        }

        body.append(navigation_info);
    });

    element.addEventListener("mouseleave", 
    () => {
        navigation_info.remove();
    });
}

