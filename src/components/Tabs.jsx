export default function Tab({tabButton,children,ButtonContainer = 'menu'})
{
    return (
        <>
            <ButtonContainer>{tabButton}</ButtonContainer>
            {children}
        </>
    );
}