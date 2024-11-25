import React, { useState, useEffect, useRef } from "react";
import { CgCloseR } from "react-icons/cg";
import { TbCrystalBall } from "react-icons/tb";


function Media({ onClose }) {
    const messages = [
        'Laziness is nothing more than the habit of resting before you get tired.',
        'Success is not final, failure is not fatal: It is the courage to continue that counts.',
        'The only way to do great work is to love what you do.',
        'Do not wait for the perfect moment, take the moment and make it perfect.',
        'Man suffers only because he takes seriously what the gods made for fun.',
        'Ego is just like dust in the eyes. Without clearing the dust, we can’t see anything clearly.',
        'The greatest wealth is to live content with little.',
        'Do what you can, with what you have, where you are.',
        'A mind that is stretched by a new experience can never go back to its old dimensions.',
        'He who conquers others is strong; he who conquers himself is mighty.',
        'The wound is the place where the light enters you.',
        'Don’t let your mind bully your body into believing it must carry the weight of its worries.',
        'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
        'A lazy mind makes a restless heart.',
        'Do not dwell in the past; do not dream of the future; concentrate the mind on the present moment.',
        'The ego says, “Once everything falls into place, I will feel peace.” The spirit says, “Find your peace, and then everything will fall into place.”',
        'Rest when you’re weary. Refresh and renew yourself, your body, your mind, your spirit. Then get back to work.',
        'Nature does not hurry, yet everything is accomplished.',
        'The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.',
        'The less you respond to negativity, the more peaceful your mind becomes.',
        'When you realize how perfect everything is, you will tilt your head back and laugh at the sky.',
        'Your calm mind is the ultimate weapon against your challenges.',
        'Happiness depends upon ourselves.',
        'The ego is a veil between humans and God.',
        'True mastery can be gained by letting things go their own way. It cannot be gained by interfering.',
        'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
        'Be still and know that you are more than your thoughts.',
        'Arise, awake, and stop not until the goal is reached.',
        'When we are no longer able to change a situation, we are challenged to change ourselves.',
        'Simplicity, patience, compassion. These three are your greatest treasures.',
        'Discipline is the bridge between goals and accomplishment.',
        'A contented mind is the greatest blessing a man can enjoy in this world.',
        'When you let go of what you are, you become what you might be.',
        'Quiet the mind, and the soul will speak.',
    ];


    const [message] = useState(
        messages[Math.floor(Math.random() * messages.length)]
    );

    const fortuneRef = useRef(null);

    const handleDrag = (event) => {
        const fortune = fortuneRef.current;
        const { clientX, clientY } = event;

        const rect = fortune.getBoundingClientRect();
        const offsetX = clientX - rect.left;
        const offsetY = clientY - rect.top;

        const onMouseMove = (moveEvent) => {
            fortune.style.left = `${moveEvent.clientX - offsetX}px`;
            fortune.style.top = `${moveEvent.clientY - offsetY}px`;
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', onMouseMove);
        });
    }


    return (
        <div ref={fortuneRef} className="fortuneContent">
            <button className="closeBtn" onClick={onClose}>
                <CgCloseR />
            </button>

            <div className="fortuneHeader" onMouseDown={handleDrag}>
                <p className="fortuneDaily"><span><TbCrystalBall /></span>Daily Fortune | {new Date().toLocaleDateString()} </p>
            </div>

            <div className="fortuneBody">
                <p className="fortuneMessage">"{message}"</p>
            </div>
        </div>
    );
}

export default Media