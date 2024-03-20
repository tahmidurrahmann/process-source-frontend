import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import FocusTrap from "focus-trap-react";
import cn from "classnames";
import useMountTransition from "./useMountTransition";

function createPortalRoot() {
    const drawerRoot = document.createElement("div");
    drawerRoot.setAttribute("id", "drawer-root");

    return drawerRoot;
}

const Drawer = ({
    isOpen,
    children,
    className,
    onClose,
    position = "left",
    removeWhenClosed = true
}) => {
    const bodyRef = useRef(null);
    const portalRootRef = useRef(
        typeof document !== 'undefined' ?
            document.getElementById("drawer-root") || createPortalRoot() :
            null
    );
    const isTransitioning = useMountTransition(isOpen, 300);

    useEffect(() => {
        bodyRef.current = document.querySelector("body");
        return () => {
            bodyRef.current = null;
        };
    }, []);

    useEffect(() => {
        bodyRef.current.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;
        const bodyEl = bodyRef.current;

        return () => {
            portal.remove();
            bodyEl.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        const updatePageScroll = () => {
            if (isOpen) {
                bodyRef.current.style.overflow = "hidden";
            } else {
                bodyRef.current.style.overflow = "";
            }
        };

        updatePageScroll();
    }, [isOpen]);

    useEffect(() => {
        const onKeyPress = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keyup", onKeyPress);
        }

        return () => {
            window.removeEventListener("keyup", onKeyPress);
        };
    }, [isOpen, onClose]);

    if (!isTransitioning && removeWhenClosed && !isOpen) {
        return null;
    }

    return createPortal(
        <FocusTrap active={isOpen}>
            <div
                aria-hidden={isOpen ? "false" : "true"}
                className={cn("drawer-container", {
                    open: isOpen,
                    in: isTransitioning,
                    className
                })}
            >
                <div className={cn("drawer", position)} role="dialog">
                    {children}
                </div>
                <div className="backdrop" onClick={onClose} />
            </div>
        </FocusTrap>,
        portalRootRef.current
    );
};

export default Drawer;