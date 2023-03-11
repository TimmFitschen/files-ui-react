import { OverridableComponentProps } from "../overridable/OverridableComponentsProps";
export interface AvatarFullProps extends OverridableComponentProps {
    variant?: "square" | "circle";
    borderRadius?: string;
    src?: string | File;
    onChange?: Function,
    /**
     * Alternative label when an error occurs
     * on loading the image
     */
    alt?: string,

    emptyLabel?: string;
    uploadingLabel?: string;
    changeLabel?: string;
    /**
     * if a src is given, then avatar will show the image
     * or a file error message and will not allow
     * the user to change the picture. Also, layer on hover will not be shown
     */
    readOnly?: boolean;

    isUloading?: boolean;

    onError?: React.ReactEventHandler<HTMLImageElement>;
    /**
     * If true, images will be analized and showed according their orientation
     * orientation can be landscape if height < width. 
     * In that case height will be set to 100%. Otherwise width will be set to 100%
     */
    smart?: boolean;
    /**
     * If not present, image width will be set to 100%.
     * 
     * If present, image will be analized and displayed according to its heigh and width.
     * Image width height greater than its width has a "portrait" orientation.
     * Otherwise it has a "landscape" orientation.
     * - If value is "orientation", image will be displayed complete by giving 100% 
     * to width prop if the orientation is "landscape". 
     * When orientation is "portrait", height prop will be set to 100%. Some images 
     * will show an empty space.
     * - If value is "center", image will be centered and will not be displayed complete.
     * This the empty space is avoided. This is achived by giving 100% to width prop if 
     * the orientation is "portrait". When orientation is "landscape", height prop will be set to 100%.
     * @default orientation
     */
    smartImgFit?: false | "orientation" | "center";
}

export declare type AvatarProps =
    /*   {
        [D in keyof React.HTMLProps<HTMLDivElement>]: React.HTMLProps<HTMLDivElement>[D]
      } & */
    {
        [P in keyof AvatarFullProps]: AvatarFullProps[P];

    }
//React.HTMLProps<HTMLDivElement>
export const defaultAvatarProps: AvatarProps =
{
    variant: "square",
    alt: `avatar`,
    emptyLabel: "Agregar foto",
    changeLabel: "Cambiar foto",
    uploadingLabel: "Uploading...",
    readOnly: false,
    smart: false,
    smartImgFit: "orientation",
}