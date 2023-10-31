interface VisibilityContainerProps {
  isVisible: boolean;
  children: any;
}
const VisibilityContainer = ({
  isVisible,
  children,
}: VisibilityContainerProps) => {
  return isVisible ? children : null;
};

export default VisibilityContainer;
