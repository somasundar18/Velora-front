
import UserLayout from "../../../../layouts/UserLayout";
import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";

function AIAssistant() {
    return (
        <UserLayout>
            <div className="ai">
                <h1>AI Safety Assistant</h1>
                <p> Ask anything related to your safety. </p>
                <Input type="text" placeholder="Ask your question..."/>
                <Button text="Ask AI"/>
                <div className="ai-response">
                    <h3>AI Response</h3>
                    <p> Your AI response will appear here. </p>
                </div>
            </div>
        </UserLayout>
    );
}
export default AIAssistant;