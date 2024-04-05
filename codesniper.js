// Create a class named CodeSniper
class CodeSniper {
    constructor() {
        this.tools = [];
    }

    // Method: add a tool to the CodeSniper
    addTool(tool) {
        this.tools.push(tool);
        console.log(`Added ${tool} to the CodeSniper's toolkit.`);
    }

    // Method: remove a tool from the CodeSniper
    removeTool(tool) {
        const index = this.tools.indexOf(tool);
        if (index !== -1) {
            this.tools.splice(index, 1);
            console.log(`Removed ${tool} from the CodeSniper's toolkit.`);
        } else {
            console.log(`${tool} is not found in the CodeSniper's toolkit.`);
        }
    }

    // Method: list all tools in the CodeSniper's toolkit
    listTools() {
        console.log("Tools in the CodeSniper's toolkit:");
        this.tools.forEach(tool => {
            console.log(tool);
        });
    }
}

// Create an instance of CodeSniper named myCodeSniper
const myCodeSniper = new CodeSniper();

// Add tools to the CodeSniper
myCodeSniper.addTool("Visual Studio Code");
myCodeSniper.addTool("Git");
myCodeSniper.addTool("Chrome Developer Tools");

// List all tools in the CodeSniper's toolkit
myCodeSniper.listTools();

// Remove a tool from the CodeSniper's toolkit
myCodeSniper.removeTool("Git");

// List all tools in the CodeSniper's toolkit after removal
myCodeSniper.listTools();
