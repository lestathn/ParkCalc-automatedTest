export async function isMobile(t){
    try {
        const width = await t.eval(() => window.innerWidth);
        if (width === 375) {
            return true;
        }
        else{
            return false;
        }        
    } catch (error) {
        console.log(error)
    }
}
