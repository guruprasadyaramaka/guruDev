public class ExampleStatic {
    public static Example__mdt metadata;
    
    public static Example__mdt getExampleMetadata() {
        if(metadata == null) {
            metadata = [SELECT Id FROM Example__mdt LIMIT 1];
        }
        return metadata;
    }
    private ExampleStatic() {
    }
}